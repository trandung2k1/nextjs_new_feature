import getUser from '@/lib/getUser';
import styles from '../../page.module.css';
import getUserPosts from '@/lib/getUserPosts';
import { Suspense } from 'react';
import UserPosts from './components/UserPosts';
import { Metadata } from 'next';
import getAllUsers from '@/lib/getAllUsers';
import { notFound } from 'next/navigation';
type Params = {
    params: {
        userId: string;
    };
};
export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userId);
    const user: User = await userData;
    if (!user.name) {
        return {
            title: 'User Not Found',
        };
    }
    return {
        title: user.name,
        description: `This is the page of ${user.name}`,
    };
}
export default async function UserPage({ params: { userId } }: Params) {
    const userData: Promise<User> = getUser(userId);
    const userPostsData: Promise<Post[]> = getUserPosts(userId);
    const user = await userData;
    if (!user.name) return notFound();
    return (
        <div className={styles.main}>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                {/* @ts-expect-error Server Component */}
                <UserPosts promise={userPostsData} />
            </Suspense>
        </div>
    );
}
export async function generateStaticParams() {
    const usersData: Promise<User[]> = getAllUsers();
    const users = await usersData;
    return users.map((user) => ({
        userId: user.id.toString(),
    }));
}

