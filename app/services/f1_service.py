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

    laps = laps.dropna(subset=['LapTime'])

    # convert timedeltas to seconds
    # TODO: move to utils/formatters.py
    for col in ['LapTime', 'Sector1Time', 'Sector2Time', 'Sector3Time']:
        laps[col] = laps[col].dt.total_seconds()

    # float columns that should be integers
    laps['LapNumber'] = laps['LapNumber'].astype(int)
    laps['TyreLife'] = laps['TyreLife'].astype(int)

    return laps.to_dict(orient='records')
