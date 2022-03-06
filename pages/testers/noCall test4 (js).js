//Fetch data from the Spotify Endpoint
const getUserData = async (token) => {
const settings = {
headers: {'Authorization': 'Bearer ' + token}
}
const response = await fetch('https://api.spotify.com/v1/me', settings);
const data = await response.json()
return data;
}

const App = () => {
const [showNavPanel, setShowNavPanel] = useState(false)
const closeNavPanel = () => {setShowNavPanel(false)}

const [user, setUser] = useState();
const [accessToken, setaccessToken] = useState(null);
const [refreshToken, setrefreshToken] = useState(null);

//Parse URL sring to get the access token from Spotify
const hashparam = window.location.hash
.substring(1)
.split("&")
.reduce(function(initial, item) {
if (item) {
var parts = item.split("=");
initial[parts[0]] = decodeURIComponent(parts[1]);
}
return initial;
}, {});
//Set accessToken and refreshToken from URL returned from Server Auth
useEffect(() => {
setaccessToken(hashparam.access_token);
setrefreshToken(hashparam.refresh_token);
}, []);

// Get User data from Spotify endpoint once accessToken is set.
useEffect(() => {
async function fetchData() {
if(accessToken != null) {
setUser(await getUserData(accessToken));
}
}

fetchData();
}, [accessToken]);
}