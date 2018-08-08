# rich-list-app


>Renders the list of the richest people with their respective attributes (see bundled screen shot)
On page load, http client gets the list and assigns to display list variable. item component displays attributes.
>Provides a search box to dynamically filter the list with a ‘No results found’ message when the search does not match any of the list.
Assign current display list to variable, and on keyup perform search on filtered list.
>This search box should search all fields available – i.e. matches will be made for name, net worth, age and country of birth
Function converts all object values to lowercase strings and checkes indexOf. So searching 'W' returns 
>Provide a dropdown for selecting the currency which converts the currency as per the currencies provided in the json file
>Provide a filter for nationality
>Provide a sorting dropdown to sort by ranking, age and name
>Filters, sorting and searching can be combined, i.e. narrow results progressively
> When the page first loads, the default currency should be USD, the default order should be rank, the birthplace filter should be ‘show all’ and the search box should be empty