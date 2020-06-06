API='https://tic-tac-toe-wdi-production.herokuapp.com'
URL_PATH='/sign-up'

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PW}"'",
      "password_confirmation": "'"${PW}"'"
    }
  }'

echo
