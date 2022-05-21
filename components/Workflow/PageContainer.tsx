import styles from './PageContainer.module.css';

function PageContainer(props: any) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
};

export default PageContainer;