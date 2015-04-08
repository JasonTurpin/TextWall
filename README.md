# Text Wall
-This create a landing page that displays incoming text messages.

Example Of working application: 

text.JasonTurpin.com

Requirements:

-Twilio Number

-Apache driven web server (tool uses .htaccess, if you use a different environment you must set you application to funnel the requests the same way .htaccess does)

Instructions on how to get setup:
1.  Purchase a phone number from Twilio.  Set up the incoming texts handler to be sent to YOURDOMAIN.COM/api/incoming - use GET for requests

2.  Install Composer.

3.  Run composer update inside /api/laravel.

4.  Populate the environment variables located in /api/laravel/.env (DB credentials, Twilio Number, Cache Lifetime, etc)

5.  Run /api/laravel/changes.sql to populate your DB.

6.  Update the view to use the theme of your choice.

