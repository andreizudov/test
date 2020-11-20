var elem = document.getElementById('tableVL')
console.log(elem)
        let teams = ["Центр", "Пятница", "ИНК", 'Витязи', "Автомакс", "Русский лес", "СКА-Зеленый", "ТСА", "Ангария", "Комиссар 911"]
        let colu = ['№', 'Команда', 'И', 'В', 'Н', 'П', 'з','п', 'Р', 'О']
        let stat = ['0', '0', '0', '0', '0', '0', "0",'0'], teamsStats = [];

        for (let i = 0; i < teams.length; i++) 
        {
            var addTeam=[];
             addTeam.push(teams[i]); 
             for(let j=0; j<stat.length;j++)
             {
                addTeam.push(stat[j])
             }
             

            teamsStats.push(addTeam)
           
        }
     
        createTable(elem, colu.length, teams.length);

        function createTable(parent, col, rows) {

            let table = document.createElement('table');
            for (let i = 0; i < teams.length + 1; i++) {
                let tr = document.createElement('tr')
                for (j = 0; j < colu.length; j++) {
                    let td = document.createElement('td')
                    if (i == 0)
                        td.innerHTML = colu[j]
                    else if (j == 1) {
                        td.innerHTML = teamsStats[i - 1][0];
                        td.id = teamsStats[i - 1][0];
                        td.setAttribute('name', teamsStats[i - 1][0])
                    }
                    else if (j == 0) {
                        td.innerHTML = i
                    }
                    else {
                        td.innerHTML = teamsStats[i - 1][j-1];

                    }

                    tr.appendChild(td)
                }

                table.appendChild(tr)
            }
            parent.appendChild(table)
            table.id = "таблица";
        }
        
        