# API='https://tic-tac-toe-wdi-production.herokuapp.com'
API='https://tic-tac-toe-wdi.herokuapp.com'
URL_PATH='/sign-in'

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PW}"'"
    }
  }'

echo
