import fastf1
import pandas as pd 
import math

def get_session_results(year, grand_prix, session_type):
    session = fastf1.get_session(year, grand_prix, session_type)
    session.load(telemetry=False, weather=False)
    results = session.results[[
        'DriverNumber', 
        'Position', 
        'Abbreviation', 
        'FullName', 
        'TeamName', 
        'GridPosition', 
        'Status', 
        'Points'
    ]].sort_values(by='Position')

    results['DriverNumber'] = results['DriverNumber'].astype(int)
    results['GridPosition'] = results['GridPosition'].astype(int)
    results['Points'] = results['Points'].astype(int)
    results['Position'] = results['Position'].astype(int)

    return results.to_dict(orient='records')


def get_lap_data(year, grand_prix, session_type):
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

    # convert timedeltas to seconds, None if missing
    for col in ['LapTime', 'Sector1Time', 'Sector2Time', 'Sector3Time']:
        laps[col] = laps[col].apply(
            lambda x: None if pd.isnull(x) else x.total_seconds()
        ).astype(object)
    
    laps = laps.where(laps.notna(), other=None)

    laps['LapNumber'] = laps['LapNumber'].astype(int)
    laps['TyreLife'] = laps['TyreLife'].astype(int)



    return laps.to_dict(orient='records')
