var placeSearch, autocomplete;

var componentForm = [
    "street_number",
    "street_name",
    "district",
    "city",
    "country"
];

function addInputAddress(id) {
    address_new = new google.maps.places.Autocomplete(document.getElementById(id), { types: ['geocode'] });

    google.maps.event.addListener(address_new, 'place_changed', function () {
        fillInAddress();
    });
}

function initAutocomplete() {
    // Create the autocomplete object, restricting the search predictions to
    // geographical location types.
    //autocomplete = new google.maps.places.Autocomplete(document.getElementById('address'), { types: ['geocode'] });

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components.
    //autocomplete.setFields(['address_component']);

    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
    //autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
    // Get the place details from the autocomplete object.
    //var place = autocomplete.getPlace();

    for (var i = 0; i < componentForm.length; i++) {
        var item = componentForm[i];
        try {
            document.getElementById(item).value = '';
            document.getElementById(item).disabled = false;
        } catch (e) {

        }
    }

    // Get each component of the address from the place details,
    // and then fill-in the corresponding field on the form.
    //for (var i = 0; i < place.address_components.length; i++) {
    //    var value = place.address_components[i]["long_name"];
    //    document.getElementById(componentForm[i]).value = value;
    //}
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle(
                { center: geolocation, radius: position.coords.accuracy });
            autocomplete.setBounds(circle.getBounds());
        });
    }
}

//Import api google 
//<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCDPupB3gprFpzX0TSHEA8sz74-q6MkpYY&libraries=places&callback=initAutocomplete" async defer></script>