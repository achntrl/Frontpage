## Credit
This work is based on [the Frontpage of Jasius](https://github.com/Jasius/Frontpage).

## Get started

I use the [openweathermap.org](https://openweathermap.org) API to fetch the weather information. You need to create a file called `API_KEY.js` containing the following code:

```javascript
function getAPIKey() {
    return '<your-api-key-for-openweathermap.org>';
```

You can get an API key for free on their website.

I use Replace New Tab Page chrome extension to have the startpage loaded on new tab opening.

I also created a Chrome theme based on the [Dracula Theme](https://draculatheme.com/) that's included in the repo. Colors are a bit off from the original color scheme though.

## TODO

- [ ] Add some kind of persistance in the choice of city for the weather. If I select Montpellier, the next time I open a tab, it displays the weather in Montpellier
- [ ] Add weather forecast next to the current weather