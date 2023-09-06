import { FC } from "react";

import { Container } from "components/Container";
import { Todos } from "components/Todos";

import styles from "./app.module.scss";

const App: FC = () => {
    return (
        <main className={styles.main}>
            <Container>
                <Todos />
            </Container>
        </main>
    );
};

export default App;
