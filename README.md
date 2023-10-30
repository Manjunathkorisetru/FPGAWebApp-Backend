# FPGAWebApp-Backend

Master's thesis Manjunath Korisetru

## Topic - FPGA-Database: Web Application for Interactive Visualization of FPGA Device specifications

In this thesis, I have developed the FPGA Database: A comprehensive database consisting of FPGA devices and their specifications from various vendors and a FPGA Web Application: An application which enables the users to browse specifications of various FPGA devices, compare the specifications and visualize. Currently, there are 153 FPGA devices in the mongoDB database.


## Steps to start the FPGA backend web application
1. Once you are in the folder where you have saved the FPGAWebApp-Backend. Try to run `node -v` to check if the npm is installed or not.
2. If npm is not installed, check this link on how to install node.js for windows:`https://phoenixnap.com/kb/install-node-js-npm-on-windows`
3. If npm is not installed, check this link on how to install node.js for Mac : `https://treehouse.github.io/installation-guides/mac/node-mac.html`
4. Install dependencies by running the script `npm install`. This script will install all the dependencies mentioned in the file `package.json`.
5. Run `nodemon server.js` from FPGA-Catalogue-backend (Without the backend running, data is not displayed in the FPGA web application).
6. After running `nodemon server.js`, The backend server is running on Open [http://localhost:4000](http://localhost:3000) to view it in the browser.
7. `Note:` The MongoDB database URI is `mongodb+srv://fpga:FpgaUpb%402021@cluster0.cewvn.mongodb.net/fpgadatabase?retryWrites=true&w=majority` which is specified in the `.env` file. 

