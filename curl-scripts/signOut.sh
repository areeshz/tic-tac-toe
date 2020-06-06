API='https://tic-tac-toe-wdi.herokuapp.com'
URL_PATH='/sign-out'

curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "authorization: Token token=${TOKEN}" \

echo
