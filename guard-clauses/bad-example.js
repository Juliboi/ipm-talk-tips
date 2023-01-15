//! Variables
const wifi = false;
const loggedIn = false;
const isNotBanned = false;
const admin = false;

//! External Functions
const openAdminDashboard = () => {
  console.log("Opened Admin Dashboard!");
};

const printErrorMessage = (message) => {
  console.error(`Error Message: ${message}`);
  return { message: message, response: "error" };
};

//! Main Example Function
const handleAdminDashboard = () => {
  if (wifi) {
    if (loggedIn) {
      if (isNotBanned) {
        if (admin) {
          openAdminDashboard();
        } else {
          return printErrorMessage("You are not an admin!");
        }
      } else {
        return printErrorMessage("You have been banned!");
      }
    } else {
      return printErrorMessage("Your are not logged in!");
    }
  } else {
    return printErrorMessage("You are not connected to the wifi!");
  }
};
