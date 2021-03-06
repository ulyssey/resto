module.exports = {
  alerts_msg: {
    ok: "ok",
    modify: "modifier",
    cancel: "annuler",
    supp: "supprimer",
    wrong_nbr: "ce numéro n'existe pas"
  },
  txt: {
    filter: 'filtre',
  },
  articles_related: [{
      list_number: "0",
      list_next: "1",
      list_name: "boissons",
      ask_for_number: "Entrer le numéro de la boisson:",
      btn_command_complete: "Valider",
      ask_to_choose_by_click: "Ou cliquer ci-dessous:",
      confirm_selected_article_msg: "ajouter la boisson ci-dessous?",
      confirm_command_msg: "Confirmer vos boissons. Vous serez servi dans quelques minutes",
      articles_groups: [{
          title: 'Apéritifs',
          group_nbr: '10',
          articles: [{
              nbr: '100',
              title: 'martini rouge',
              price: '2.25'
            },
            {
              nbr: '101',
              title: 'porto',
              price: '2.30'
            },
            {
              nbr: '120',
              title: 'pastis',
              price: '2.30'
            },
            {
              nbr: '203',
              title: 'cuba libre',
              price: '2.30'
            },
            {
              nbr: '105',
              title: 'martini blanc',
              price: '2.30'
            },
            {
              nbr: '731',
              title: 'whisky',
              price: '2.30'
            }
          ]
        },
        {
          title: 'Vins',
          group_nbr: '15',
          articles: [{
              nbr: '200',
              title: 'verre de vin rouge',
              price: '2.25'
            },
            {
              nbr: '201',
              title: 'verre de vin blanc',
              price: '2.30'
            },
            {
              nbr: '220',
              title: 'verre de rosé',
              price: '2.30'
            },
            {
              nbr: '303',
              title: 'côte du Rhöne (bouteille)',
              price: '2.30'
            },
            {
              nbr: '205',
              title: 'champagne',
              price: '2.30'
            }
          ]
        },
        {
          title: 'Sans Alcool',
          group_nbr: '20',
          articles: [{
              nbr: '300',
              title: 'thé vert',
              price: '2.25'
            },
            {
              nbr: '301',
              title: 'thé glacé',
              price: '2.30'
            },
            {
              nbr: '320',
              title: 'jus de tomate',
              price: '2.30'
            },
            {
              nbr: '403',
              title: 'jus de melon',
              price: '2.30'
            },
            {
              nbr: '305',
              title: 'limonade',
              price: '2.30'
            }
          ]
        }
      ]
    },
    {
      list_number: "1",
      list_next: "",
      list_name: "menu",
      ask_for_number: "Entrer le numéro du plat:",
      ask_to_choose_by_click: "Ou cliquer ci-dessous:",
      btn_command_complete: "Valider",
      confirm_selected_article_msg: "ajouter l'article ci-dessous?",
      confirm_command_msg: "Confirmer votre commande",
      articles_groups: [{
          title: 'Entrées',
          group_nbr: '30',
          articles: [{
              nbr: '400',
              title: 'foie gras',
              price: '2.25'
            },
            {
              nbr: '401',
              title: 'caviar',
              price: '2.30'
            },
            {
              nbr: '405',
              title: 'terrine de canard',
              price: '2.30'
            },
            {
              nbr: '410',
              title: 'salade niçoise',
              price: '2.30'
            }
          ]
        },
        {
          title: 'Plats principaux',
          group_nbr: '50',
          articles: [{
              nbr: '500',
              title: 'coq au vin',
              price: '2.25'
            },
            {
              nbr: '501',
              title: 'moules mariniéres',
              price: '2.30'
            },
            {
              nbr: '521',
              title: 'omellette aux pommes de terres',
              price: '2.30'
            },
            {
              nbr: '522',
              title: 'diots au vin blanc',
              price: '2.30'
            }
          ]
        },
        {
          title: 'Fromages et desserts',
          group_nbr: '70',
          articles: [{
              nbr: '600',
              title: 'plats de fromage',
              price: '2.25'
            },
            {
              nbr: '601',
              title: 'tarte tatin',
              price: '2.30'
            },
            {
              nbr: '620',
              title: 'coupe de glace',
              price: '2.30'
            }
          ]
        }
      ]
    }
  ]
}
