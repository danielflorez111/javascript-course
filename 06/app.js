var budgetController = (function () {

})();



var UIController = (function () {

})();



var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {
        // get input data

        // add the item to the budget controller

        // add new item to the UI

        // calculate the budget

        // display the budget on UI

        console.log('Worked');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });




})(budgetController, UIController);