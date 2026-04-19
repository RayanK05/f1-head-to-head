import fastf1
import pandas as pd 

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

    return results.to_dict(orient='records')
