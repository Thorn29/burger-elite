import { createSelector } from 'reselect';

const selectBuilder = state => state.builder;

export const selectSeeds = createSelector([selectBuilder], builder => builder.seeds);

export const selectIngredients = createSelector([selectBuilder], builder => builder.ingredients);

export const selectIngredientCount = createSelector([selectIngredients], ingredients => ingredients.reduce((acc, item) => acc + item.amount, 0));

export const selectIngredientTotalPrice = createSelector([selectIngredients], ingredients => ingredients.reduce((acc, item) => acc + (item.amount * item.price), 0).toFixed(2));
