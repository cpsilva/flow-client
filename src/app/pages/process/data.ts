
export const DATA: any[] = [
    {
        Id: 1,
        Name: 'Recrutamento & Seleção',
        Children: [
            { 
                Id: 5, 
                Name: 'Entrevistas' 
            },
            { 
                Id: 6,
                Name: 'Alinhamento cultural' 
            },
            {
                Id: 7,
                Name: 'Avaliação de cases',
                Children: [
                    { 
                        Id: 13,
                        Name: 'Não técnico' 
                    },
                    {
                        Id: 14,
                        Name: 'Técnico',
                        Children: [
                            { 
                                Id: 15,
                                Name: 'Entrega' 
                            },
                        ]
                    }
                ]
            },
            { 
                Id: 16,
                Name: 'Contratação' 
            }
        ]
    },
    {
        Id: 2,
        Name: 'Eventos',
        Children: [
            { 
                Id: 8,
                Name: 'Internos' 
            },
            { 
                Id: 9,
                Name: 'Externos' 
            }
        ]
    }
];
