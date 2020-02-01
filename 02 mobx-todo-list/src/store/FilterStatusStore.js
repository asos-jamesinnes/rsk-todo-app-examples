import { observable, action } from "mobx";

const ob = observable({
    filterStatus: 0,
    status: {
        all: 0,
        active: 1,
        complete: 2
    }
});

const setFilterStatus = action((status) => {
    ob.filterStatus = status;
})

const FilterStatusStore = {
    ob,
    setFilterStatus
};

export default FilterStatusStore;