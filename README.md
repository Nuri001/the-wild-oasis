<h1>The Wild Oasis</h1>
A custom-built application to manage a small boutique hotel: bookings, cabins and guests.<br>
This is the internal application used inside the hotel to check in guests as they arrive.<br>

<h3>PROJECT REQUIREMENTS</h3>
Users of the app are hotel employees. They need to be logged into the application to perform tasks.<br>
New users can only be signed up inside the applications (to guarantee that only actual hotel employees can get accounts).<br>
Users should be able to upload an avatar, and change their name and password. <br>
App needs a table view with all cabins, showing the cabin photo, name, capacity, price, and current discount. <br>
Users should be able to update or delete a cabin, and to create new cabins (including uploading a photo). <br>
App needs a table view with all bookings, showing arrival and departure dates, status, and paid amount, as well as cabin and guest data. <br>
The booking status can be "unconfirmed" (booked but not yet checked in), "checked in", or "checked out". The table should be filterable
by this important status.<br>
Other booking data includes: number of guests, number of nights, guest observations, whether they booked breakfast, breakfast price. <br>
Users should be able to delete, check in, or check out a booking as the guest arrives (no editing necessary for now). <br>
Bookings may not have been paid yet on guest arrival. Therefore, on check in, users need to accept payment (outside the app), and
then confirm that payment has been received (inside the app). <br>
On check in, the guest should have the ability to add breakfast for the entire stay, if they hadn't already. <br>
Guest data should contain: full name, email, national ID, nationality, and a country flag for easy identification. <br>
The initial app screen should be a dashboard, to display important information for the last 7, 30, or 90 days: <br>
 -A list of guests checking in and out on the current day. Users should be able to perform these tasks from here. <br>
 -Statistics on recent bookings, sales, check ins, and occupancy rate. <br>
 -A chart showing all daily hotel sales, showing both “total” sales and “extras” sales (only breakfast at the moment). <br>
 -A chart showing statistics on stay durations, as this is an important metric for the hotel. <br>
Users should be able to define a few application-wide settings: breakfast price, min and max nights/booking, max guests/booking. <br>
App needs a dark mode. <br>

<h3>TECHNOLOGY DECISIONS</h3>
Routing -> React Router <br>
Styling -> styled components <br>
Remote state -> React Query management <br>
UI State -> Context API management <br>
Form -> React Hook Form management <br>
backend -> Supabase <br>






![1](https://github.com/Nuri001/the-wild-oasis/assets/108418308/a53aeba4-92d5-404e-96b2-cb1aa8123d5e)
![2](https://github.com/Nuri001/the-wild-oasis/assets/108418308/023efc74-53cd-41e4-9710-f91c68980c16)
![3](https://github.com/Nuri001/the-wild-oasis/assets/108418308/cd052263-a40d-4880-b86a-d46092c6f8c2)


