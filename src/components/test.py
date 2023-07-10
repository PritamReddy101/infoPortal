import openai
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


cred = credentials.Certificate("/Users/pritamreddy/Downloads/React-contact-form-master/src/components/cred.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

docs = db.collection("info").where("shop", "==", "Metal").stream()

for doc in docs:
    data = doc.to_dict()
    print(data['message'])

openai.api_key = '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'
messages = [
    {
        "role": "system",
        "content": "You are a tour guide of T-Works, you will give a tour according to the message given as input. Do not imagine anything, beyond what is given to you as information"
    }
]
message = data['message']
if message:
    messages.append({"role": "user", "content": message})
    chat = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=messages)
    reply = chat.choices[0].message.content
    print(f"{reply}")
    messages.append({"role": "assistant", "content": reply})