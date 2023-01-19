import NavigationBar from './NavigationBar';

const NavigationBarItems = {
    links: [
        { label: 'home', link: '/' },
        { label: 'about me', link: '/about-me' },
        { label: 'projects', link: '/projects' },
        { label: 'resume', link: '/resume' },
    ],
};

export default function NavigationBarUsage() {
    return (
        <NavigationBar {...NavigationBarItems} />
    );
}
