API='https://tic-tac-toe-wdi.herokuapp.com'
URL_PATH='/games'

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header 'Content-Type: application/json' \
  --header "authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VAL}"'"
      }
    }
  }'

echo
