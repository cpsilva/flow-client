
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
    },
    {
        Id: 3,
        Name: 'Comunicação de resultados'
    },
    {
        Id: 4,
        Name: 'Avaliação de performance',
        Children: [
            { 
                Id: 10,
                Name: 'Gerentes' 
            },
            { 
                Id: 11,
                Name: 'Coordenadores' 
            },
            { 
                Id: 12,
                Name: 'Lideres tecnicos' 
            }
        ]
    }
];
