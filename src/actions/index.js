

export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
export const navPageSelect = (linkSelected) => {
    console.log("You clicked on page: ", linkSelected.page, linkSelected.name);
    $(linkSelected.page).fadeIn();
    $(linkSelected.page).animate({
        padding: "4em"
    },"slow","swing");
    return {
        type: 'LINK_SELECTED',
        payload: linkSelected
    }

};


