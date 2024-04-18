<h1 align="center">Space Ship Adventure App</h1>

<p align="center">
  <img src="https://github.com/DarwisNarvaezDev/space-ship-adventure/assets/81827734/2c2c1890-7357-4d87-8d8f-afe6155b9619" alt="animatedRocket" />
</p>

<p align="center">
This is a project entirely for fun; i wanted to make a animations implementation so here it is. 
</p>

<h2 align="center">Docs</h2>

<p align="center">
Users can give coordinates for the rocket flight, it can reach three possible planets. The flight details can be passed to app via GUI or via dedicated API
</p>

<h2 align="center">Api</h2>

<p align="center">
This project has a api submodule which is the dedicated API for the space ship app, users can pass this body in a POST request to the app's url, in order to provide fligth details:
</p>

``{
  "distance": <numeric value>,
  "rocketSpeed": <numeric value>,
  "flightTime": <numeric>
}``

then the response will be a 200:

``
{
    "message": "Command sent successfully."
}
``

After that, a notification can be seen in Gui:

<p align="center">
<img src="https://github.com/DarwisNarvaezDev/space-ship-adventure/assets/81827734/767c1c8b-31cb-4ba0-a3ee-877ecfb06bd9"></img>
</p>

<h2 align="center">Gui</h2>

<p align="center">
  From GUI, users can provide command throgh the command menu, displayed after a click in the "status" component:
</p>

<p align="center">
  <img src="https://github.com/DarwisNarvaezDev/space-ship-adventure/assets/81827734/b8c505f3-8e3c-446f-961f-97c216d0a2e0" alt="menuForm"></img>
</p>

<p align="center">
  Each section of the form, has its hint with the correct flight details, be careful of not providing valid flight data (you could be stranded in the vast space 😆).
</p>


<h2 align="center">Installation</h2>

<p align="center">
    <ol align="center">
          <li>Clone the repo `git clone`</li>
          <li>Run setup script `.\setup.bat` for windows, `bash setup.sh` for linux/mac.</li>
          <li>Leverage docker-compose to run the whole thing: `docker-compose up`</li>
    </ol>
</p>
