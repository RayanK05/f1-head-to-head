import fastf1
import pandas as pd 
import math
import datetime


def get_lap_data(year, grand_prix, session_type, drivers=None):
    session = fastf1.get_session(year, grand_prix, session_type)
    session.load(telemetry=False, weather=False)

    laps = session.laps[[
        'Driver',
        'LapNumber',
        'LapTime',
        'Sector1Time',
        'Sector2Time',
        'Sector3Time',
        'Stint',
        'Compound',
        'TyreLife',
        'IsPersonalBest'
    ]].sort_values(by=['Driver', 'LapNumber'])

    if drivers:
        laps = laps[laps['Driver'].isin(drivers)]


    # convert timedeltas to seconds, None if missing
    for col in ['LapTime', 'Sector1Time', 'Sector2Time', 'Sector3Time']:
        laps[col] = laps[col].apply(
            lambda x: None if pd.isnull(x) else x.total_seconds()
        ).astype(object)
    
    laps = laps.where(laps.notna(), other=None)

    laps['LapNumber'] = laps['LapNumber'].astype(int)
    laps['TyreLife'] = laps['TyreLife'].astype(int)



    return laps.to_dict(orient='records')

def get_driver_summary(driverkey, year, grand_prix, session_type):
    session = fastf1.get_session(year, grand_prix, session_type)
    session.load(telemetry=False, weather=False)

    driver_laps = session.laps[
        (session.laps['Driver'] == driverkey) &
        (session.laps['IsAccurate'] == True)
    ] 

    summary = {
        'abbreviation': driverkey,
        'full_name': session.results[session.results['Abbreviation'] == driverkey]['FullName'].iloc[0],
        'first_name': session.results[session.results['Abbreviation'] == driverkey]['FirstName'].iloc[0],
        'last_name': session.results[session.results['Abbreviation'] == driverkey]['LastName'].iloc[0],
        'team': session.results[session.results['Abbreviation'] == driverkey]['TeamName'].iloc[0],
        'team_colour': '#' + session.results[session.results['Abbreviation'] == driverkey]['TeamColor'].iloc[0],
        'driver_number': session.results[session.results['Abbreviation'] == driverkey]['DriverNumber'].iloc[0],
        'position': int(session.results[session.results['Abbreviation'] == driverkey]['Position'].iloc[0]),
        'grid_position': int(session.results[session.results['Abbreviation'] == driverkey]['GridPosition'].iloc[0]),
        'points': float(session.results[session.results['Abbreviation'] == driverkey]['Points'].iloc[0]),
        'status': session.results[session.results['Abbreviation'] == driverkey]['Status'].iloc[0],
        'top_speed': float(driver_laps['SpeedST'].max()),
        'avg_lap_time': driver_laps['LapTime'].mean().total_seconds(),
        'avg_sector1': driver_laps['Sector1Time'].mean().total_seconds(),
        'avg_sector2': driver_laps['Sector2Time'].mean().total_seconds(),
        'avg_sector3': driver_laps['Sector3Time'].mean().total_seconds(),
        'fastest_lap': driver_laps['LapTime'].min().total_seconds(),
        'total_laps': len(session.laps[session.laps['Driver'] == driverkey]),
        'total_pits': int(session.laps[session.laps['Driver'] == driverkey]['PitOutTime'].notnull().sum())
    }

    return summary

def get_comparision(year,grand_prix, session_type, driver1, driver2):
    summary1 = get_driver_summary(driver1, year, grand_prix, session_type)
    summary2 = get_driver_summary(driver2, year, grand_prix, session_type)

    return {
        'driver1': summary1,
        'driver2': summary2
    }

def get_session_info(year, grand_prix, session_type):
    session = fastf1.get_session(year, grand_prix, session_type)
    session.load(telemetry=False, weather=False)
    
    return {
        'year': year,
        'session_type': session_type,
        'event_name': session.event['EventName'],
        'country': session.event['Country'],
        'location': session.event['Location'],
        'round_number': int(session.event['RoundNumber']),
        'date': str(session.date.date()),
        'official_event_name': session.event['OfficialEventName'],
    }


def get_event_schedule(year):
    schedule = fastf1.get_event_schedule(year)
    
    # drop testing events — they have RoundNumber 0
    schedule = schedule[schedule['RoundNumber'] > 0]

    # drop events that have not yet occurred 
    now = datetime.datetime.now()
    schedule = schedule[schedule['Session5DateUtc'] < now]

    return [
    {
        'round_number': int(row['RoundNumber']),
        'event_name': row['EventName'],
    }
    for _, row in schedule.iterrows()
]

def get_drivers(year, grand_prix, session_type):
    session = fastf1.get_session(year, grand_prix, session_type)
    session.load(telemetry=False, weather=False)

    results = session.results[[
        'DriverNumber',
        'Abbreviation',
        'FullName',
        'TeamName',
    ]].sort_values(by='TeamName')

    results['DriverNumber'] = results['DriverNumber'].astype(int)

    results = results.rename(columns={
        'DriverNumber': 'driver_number',
        'Abbreviation': 'abbreviation',
        'FullName': 'full_name',
        'TeamName': 'team_name',
    })

    return results.to_dict(orient='records')