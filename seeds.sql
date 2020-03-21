USE vhjb7pb7ecq12xui;
DROP TABLE IF EXISTS Projects;
CREATE TABLE Projects(
id INT NOT NULL AUTO_INCREMENT,
project_name VARCHAR(250),
link VARCHAR(250),
image_link VARCHAR(350),
PRIMARY KEY(id)
);
INSERT INTO Projects(project_name, link, image_link)
VALUES ("EatDaBurger!", "https://eat-burger-da.herokuapp.com/", "https://img.pngio.com/free-png-hamburger-png-pic-png-images-transparent-cartoon-burger-burger-cartoon-png-820_407.png")
,("Friend Finder","https://new-friend-finderapp.herokuapp.com/","https://www.insidehighered.com/sites/default/server_files/styles/large/public/media/barber%20handshake.jpg?itok=KNWntI29")
,("Whats Up App","https://whatsup-app.herokuapp.com/","https://cdn.vox-cdn.com/thumbor/SeRKQQCL_6wlH6eXrwnNl25tZ3U=/0x0:675x1200/1200x800/filters:focal(284x546:392x654)/cdn.vox-cdn.com/uploads/chorus_image/image/57178833/DMTFHLpWAAMwsJS.0.jpg")
,("Headline News Scraper","https://news-scraper-egs.herokuapp.com/","https://www.rocketcitynow.com/wp-content/uploads/sites/67/2019/12/NEWSnew.jpg");
