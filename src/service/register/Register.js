import { useState } from "react";
import Header from "../main/Header";
import Action from "./Action";

const Register = () => {
    const [page, setPage] = useState(0);
    return (
        <>
            <Header />
            Hello Register, page: {page}
            <Action
                page={page}
                updatePage={setPage}
            />
        </>
    )
};

export default Register;