import { Product } from './models/product';
export const ProductsMock: Product[] = [
    {
        title: 'CAROTTES',
        // tslint:disable-next-line: max-line-length
        description:
            'Plante potagère de la famille des Ombellifères, dont la racine le plus souvent rouge, pivotante, au goût légèrement sucré est comestible, et dont certaines espèces sont cultivées comme plantes fourragères.',
        // tslint:disable-next-line: max-line-length
        imgUrl: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        provider: 'SARL Legumes&Co',
        km: 15,
        publicPrice: 3.5,
        BoughtPrice: 1.49,
    },
    {
        title: 'POIVRON ROUGE',
        // tslint:disable-next-line: max-line-length
        description:
            "Le poivron est un terme souvent utilisé pour caractériser des variétés de piments doux de l'espèce Capsicum annuum à très gros fruits (parfois appelé piment au Québec).",
        // tslint:disable-next-line: max-line-length
        imgUrl: 'https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        provider: "Halle Bio d'Aquitaine",
        km: 0,
        publicPrice: 3.53,
        BoughtPrice: 1.49,
    },
    {
        title: 'TOMATES',
        // tslint:disable-next-line: max-line-length
        description:
            "Fruit de couleur rouge et de petite taille au goût acidulé s'apparentant à une tomate classique. Elle se consomme nature, en salade ou cuisinée comme un légume.",
        // tslint:disable-next-line: max-line-length
        imgUrl: 'https://images.unsplash.com/photo-1561136594-7f68413baa99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        provider: 'SARL Legumes&Co',
        km: 15,
        publicPrice: 4.87,
        BoughtPrice: 1.99,
    },
    {
        title: 'FRAISES',
        // tslint:disable-next-line: max-line-length
        description:
            'La fraise est un fruit rouge issu des fraisiers, espèces de plantes herbacées appartenant au genre Fragaria, dont plusieurs variétés sont cultivées.',
        // tslint:disable-next-line: max-line-length
        imgUrl: 'https://images.unsplash.com/photo-1543528176-61b239494933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        provider: 'Maison Trias',
        km: 50,
        publicPrice: 5,
        BoughtPrice: 2.49,
    },
    {
        title: 'HARICOTS',
        // tslint:disable-next-line: max-line-length
        description:
            'Le Haricot, ou Haricot commun, est une espèce de plantes annuelles de la famille des Fabaceae, du genre Phaseolus, couramment cultivée comme légume ou légumineuse.',
        // tslint:disable-next-line: max-line-length
        imgUrl: 'https://images.unsplash.com/photo-1568583922651-d655cfd01241?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        provider: "Halle Bio d'Aquitaine",
        km: 0,
        publicPrice: 3.44,
        BoughtPrice: 1.1,
    },
    {
        title: 'EPINARDS',
        // tslint:disable-next-line: max-line-length
        description:
            "L'épinard est une plante potagère, annuelle ou bisannuelle, de la famille des Chenopodiaceae ou des Amaranthaceae selon les classifications.",
        // tslint:disable-next-line: max-line-length
        imgUrl: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        provider: 'Maison Trias',
        km: 50,
        publicPrice: 3.75,
        BoughtPrice: 1.2,
    },
];
