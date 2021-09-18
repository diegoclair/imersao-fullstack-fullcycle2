import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react';

interface serverPageProps {
    
}

const serverPage: React.FC<serverPageProps> = (props: any) => {
    return (
        <div>
            Server {props.name}
        </div>
    );
};

export default serverPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
    return{
        props: {
            name: 'Diego Clair'
        }
    }
};