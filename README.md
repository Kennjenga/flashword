# Resources

https://www.youtube.com/watch?v=8BgyPAeV7eU&t=658s

## Summary

- When we initialize a Vue instance it’s mounted to an element on the page.
- The Vue instance is configured via options such as data and methods.
- One way data can be bound to the page is by using text interpolation using the mustache syntax {{ }}.
- Vue directives appear in the form of a prefixed HTML attribute (v-); they’re used to apply side effects to elements.
- Example directives include: v-model, v-if, v-else, v-else-if, v-on
- Some Vue directives accept arguments (e.g. v-on:click)
- The directive v-cloak can be used to hide unrendered Vue content seen on initial page load.
- Vue instances can be designed using the Options API (shown in this example) or the Composition

## Methods vs. Computed Properties vs. Watchers

- Methods: React to an event happening in the DOM (e.g. a mouse click)
- Computed properties: Reactively compose data based on changes to other data
- Watchers: React with some action to a property changing
