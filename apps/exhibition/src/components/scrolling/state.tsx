import { createRef } from "react";

interface State {
    section: number;
    pages: number;
    zoom: number;
    top: React.RefObject<number|null>;
}

const state:State = {
    section: 5,
    pages: 5,
    zoom:1,
    top:createRef<number>(),
};

export default state;