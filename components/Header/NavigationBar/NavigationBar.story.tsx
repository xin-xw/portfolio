import NavigationBar from './NavigationBar';

const NavigationBarItems = {
    links: [
        { label: 'home', href: '/' },
        { label: 'about me', href: '/about' },
        { label: 'journey', href: '/journey' },
        { label: 'projects', href: '/projects' },

    ],
};

export default function NavigationBarUsage() {
    return (
        <NavigationBar {...NavigationBarItems} />
    );
}
