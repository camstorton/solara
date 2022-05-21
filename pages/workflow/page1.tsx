import Link from 'next/link';
import NavBar from '../../components/Workflow/NavBar';
import type { NextPage } from 'next';
import PageContainer from '../../components/Workflow/PageContainer';

const PageOne: NextPage = () => {
    return (
        <>
            <NavBar/>
            <PageContainer>
                <h1>Coming Soon!</h1>
            </PageContainer>
        </>
    );
};

export default PageOne;