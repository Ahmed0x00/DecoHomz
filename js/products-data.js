/**
 * DecoHomz — Product Catalog Data
 */

const PRODUCTS = [
    {
        id: 'luna-sofa',
        name: 'Luna 3-Seater Sofa',
        price: 12999,
        oldPrice: 15499,
        category: 'Living Room',
        material: 'Fabric',
        colors: ['#C4A882', '#8B6A48', '#3D2B1A'],
        stars: 4,
        badge: 'Best Seller',
        svg: `<svg viewBox="0 0 120 120" fill="none"><rect x="10" y="55" width="100" height="42" rx="7" fill="#8B6A48"/><rect x="10" y="42" width="20" height="36" rx="5" fill="#A07858"/><rect x="90" y="42" width="20" height="36" rx="5" fill="#A07858"/><rect x="30" y="50" width="24" height="47" rx="3" fill="#C4A882"/><rect x="66" y="50" width="24" height="47" rx="3" fill="#C4A882"/><rect x="16" y="97" width="10" height="14" rx="2" fill="#6B4832"/><rect x="94" y="97" width="10" height="14" rx="2" fill="#6B4832"/></svg>`
    },
    {
        id: 'elio-table',
        name: 'Elio Coffee Table',
        price: 4999,
        category: 'Living Room',
        material: 'Wood',
        colors: ['#8B6A48', '#5C3D2A'],
        stars: 4,
        svg: `<svg viewBox="0 0 120 120" fill="none"><ellipse cx="60" cy="68" rx="38" ry="12" fill="#8B6A48"/><ellipse cx="60" cy="55" rx="38" ry="12" fill="#A07858"/><rect x="22" y="55" width="76" height="14" rx="3" fill="#B89068"/><rect x="46" y="80" width="8" height="24" rx="3" fill="#6B4832"/><rect x="66" y="80" width="8" height="24" rx="3" fill="#6B4832"/></svg>`
    },
    {
        id: 'nora-chair',
        name: 'Nora Dining Chair',
        price: 2199,
        category: 'Dining',
        material: 'Wood',
        colors: ['#C4A882', '#8B6A48'],
        stars: 5,
        svg: `<svg viewBox="0 0 120 120" fill="none"><rect x="30" y="40" width="60" height="50" rx="5" fill="#8B6A48"/><rect x="20" y="38" width="14" height="54" rx="5" fill="#A07858"/><rect x="86" y="38" width="14" height="54" rx="5" fill="#A07858"/><rect x="44" y="90" width="10" height="18" rx="3" fill="#6B4832"/><rect x="66" y="90" width="10" height="18" rx="3" fill="#6B4832"/></svg>`
    },
    {
        id: 'milo-chair',
        name: 'Milo Lounge Chair',
        price: 6449,
        oldPrice: 7999,
        category: 'Living Room',
        material: 'Fabric',
        colors: ['#C4A882', '#8B6A48'],
        stars: 4,
        badge: 'Sale',
        badgeColor: '#c0392b',
        svg: `<svg viewBox="0 0 120 120" fill="none"><rect x="18" y="38" width="84" height="52" rx="5" fill="#8B6A48"/><rect x="8" y="36" width="16" height="56" rx="5" fill="#A07858"/><rect x="96" y="36" width="16" height="56" rx="5" fill="#A07858"/><rect x="28" y="90" width="12" height="18" rx="3" fill="#6B4832"/><rect x="80" y="90" width="12" height="18" rx="3" fill="#6B4832"/><ellipse cx="60" cy="60" rx="26" ry="16" fill="#C4A882" opacity="0.4"/></svg>`
    },
    {
        id: 'aria-accent',
        name: 'Aria Accent Chair',
        price: 3999,
        category: 'Living Room',
        material: 'Fabric',
        colors: ['#E8E0D4', '#888'],
        stars: 4,
        badge: 'New',
        svg: `<svg viewBox="0 0 120 120" fill="none"><rect x="30" y="40" width="60" height="50" rx="5" fill="#8B6A48"/><rect x="20" y="38" width="14" height="54" rx="5" fill="#A07858"/><rect x="86" y="38" width="14" height="54" rx="5" fill="#A07858"/><rect x="44" y="90" width="10" height="18" rx="3" fill="#6B4832"/><rect x="66" y="90" width="10" height="18" rx="3" fill="#6B4832"/></svg>`
    },
    {
        id: 'eden-bookshelf',
        name: 'Eden Bookshelf',
        price: 7999,
        category: 'Office',
        material: 'Wood',
        colors: ['#8B6A48', '#5C3D2A'],
        stars: 4,
        svg: `<svg viewBox="0 0 120 120" fill="none"><rect x="20" y="28" width="80" height="65" rx="4" fill="#8B6A48"/><rect x="16" y="26" width="88" height="10" rx="3" fill="#A07858"/><rect x="16" y="93" width="88" height="6" rx="2" fill="#6B4832"/><line x1="60" y1="36" x2="60" y2="93" stroke="#7A6248" stroke-width="1.5"/><rect x="26" y="44" width="28" height="18" rx="2" fill="#C4A882"/><rect x="66" y="44" width="28" height="18" rx="2" fill="#C4A882"/><rect x="26" y="70" width="28" height="18" rx="2" fill="#C4A882"/><rect x="66" y="70" width="28" height="18" rx="2" fill="#C4A882"/></svg>`
    },
    {
        id: 'luca-tv',
        name: 'Luca TV Unit',
        price: 6499,
        category: 'Living Room',
        material: 'Wood',
        colors: ['#8B6A48', '#B89068'],
        stars: 5,
        svg: `<svg viewBox="0 0 120 120" fill="none"><rect x="15" y="62" width="90" height="8" rx="3" fill="#8B6A48"/><rect x="22" y="42" width="76" height="22" rx="3" fill="#A07858"/><rect x="32" y="70" width="56" height="30" rx="3" fill="#C4A882" opacity="0.5"/><rect x="15" y="38" width="90" height="6" rx="2" fill="#B89068"/></svg>`
    },
    {
        id: 'oslo-bed',
        name: 'Oslo King Bed',
        price: 18999,
        category: 'Bedroom',
        material: 'Wood',
        colors: ['#E8E0D4', '#C4A882'],
        stars: 5,
        svg: `<svg viewBox="0 0 120 120" fill="none"><rect x="10" y="30" width="100" height="60" rx="4" fill="#8B6A48"/><rect x="10" y="60" width="100" height="30" rx="4" fill="#C4A882"/><rect x="8" y="25" width="104" height="8" rx="2" fill="#A07858"/><rect x="15" y="90" width="10" height="12" rx="2" fill="#6B4832"/><rect x="95" y="90" width="10" height="12" rx="2" fill="#6B4832"/></svg>`
    }
];
