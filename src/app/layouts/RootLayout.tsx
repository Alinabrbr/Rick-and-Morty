import { Outlet } from 'react-router-dom';

import { Container, Footer, Header } from '@/shared/layout';

import styles from './RootLayout.module.css';

export const RootLayout = () => {
    return (
        <div className={styles.app}>
            <Header />
            <Container>
                <main>
                    <Outlet />
                </main>
            </Container>
            <Footer />
        </div>
    );
};
