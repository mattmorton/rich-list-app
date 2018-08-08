# rich-list-app


>Renders the list of the richest people with their respective attributes (see bundled screen shot)
On page load, http client gets the rich list and assigns to display list variable. rich-list-item component displays attributes.
>Provides a search box to dynamically filter the list with a ‘No results found’ message when the search does not match any of the list.
Assign current display list to variable, and on keyup perform search on filtered list.
>This search box should search all fields available – i.e. matches will be made for name, net worth, age and country of birth
Function converts all object values to lowercase strings and checkes indexOf to verify match.
>Provide a dropdown for selecting the currency which converts the currency as per the currencies provided in the json file
Mapped on component init.
>Provide a filter for nationality
Parse collection to extract country names, reduce to unique values and sort alphabetically.
>Provide a sorting dropdown to sort by ranking, age and name
On change regenerate the sorted list, including button to change list direction.
>Filters, sorting and searching can be combined, i.e. narrow results progressively
Order and currency don't change content only display. If country or search selected, regenerate the list either the search or country filter applied, and sort.
> When the page first loads, the default currency should be USD, the default order should be rank, the birthplace filter should be ‘show all’ and the search box should be empty
Initial filter state set on page load, and clear filters button to reset.