import os
import requests
import json

from dotenv import load_dotenv
from google.oauth2 import service_account
from googleapiclient.discovery import build

'''
IMPORTANT:
this code WILL NOT RUN without a .env file.

in order for this code to run, and API key is needed. This is stored locally in a .env file for testing.
This .env file is gitignored as this is a public github repo. If for some reason you need access to this key,
I can share it, but there is a cost associated with API use over a certain amount, so we should try to limit
this. 

it also needs access to a chrome client service account, which is also stored locally.
'''

load_dotenv()
API_KEY = os.getenv("API_KEY")

SCOPES = ['https://www.googleapis.com/auth/presentations']
credentials = service_account.Credentials.from_service_account_file("slides_api/zotterpoint-service-account.json", scopes=SCOPES)
SLIDE_ID = "g32e75314118_0_5" # 3rd slide of test
WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbw4l9VCTy4vZnmRvYpcK4rqVGezyQrJOBcya3Py-UQ62GUptPcwlw0hqLG8HGX6hio/exec'

with open("presentation_id.txt") as pid_txt:
    PRESENTATION_ID = pid_txt.read() 
    # This is currently hard coded, but we will need the extension to write this to the file
    # Or use other communication method to get this from the extension, where maybe it is an inputable value


def get_slide_ids():
    slides_service = build("slides", "v1", credentials=credentials)
    presentation = slides_service.presentations().get(presentationId = PRESENTATION_ID).execute()
    slides = presentation.get("slides", [])

    for index, slide in enumerate(slides):
        slide_id = slide.get("objectId")
        print(f"Slide {index + 1} ID: {slide_id}")

def add_red_asterisk():
    slides_service = build("slides", "v1", credentials=credentials)

    requests = [
        {
            'createShape': {
                'objectId': 'red_asterisk_id',
                'shapeType': 'TEXT_BOX',
                'elementProperties': {
                    'pageObjectId': SLIDE_ID,
                    'size': {
                        'height': {'magnitude': 50, 'unit': 'PT'},
                        'width': {'magnitude': 50, 'unit': 'PT'}
                    },
                    'transform': {
                        'scaleX': 1,
                        'scaleY': 1,
                        'translateX': 50,
                        'translateY': 50,
                        'unit': 'PT'
                    }
                }
            }
        },
        {
            'insertText': {
                'objectId': 'red_asterisk_id',
                'insertionIndex': 0,
                'text': '*'
            }
        },
        {
            'updateTextStyle': {
                'objectId': 'red_asterisk_id',
                'fields': 'foregroundColor,fontSize,bold',
                'style': {
                    'foregroundColor': {
                        'opaqueColor': {
                            'rgbColor': {'red': 1.0, 'green': 0.0, 'blue': 0.0}
                        }
                    },
                    'fontSize': {'magnitude': 48, 'unit': 'PT'},
                    'bold': True
                }
            }
        }
    ]

    body = {
        'requests' : requests
    }

    response = slides_service.presentations().batchUpdate(presentationId = PRESENTATION_ID, body=body).execute()

    print(f"Successfully added red asterisk to slide with following response: {response}")

add_red_asterisk()