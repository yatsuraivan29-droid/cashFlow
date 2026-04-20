import './style.css';
import { supabase } from './supabase.js'; // Додаємо фігурні дужки
import './nav.js';


const familyMoney = document.getElementById('familyMoney')

async function displayMoney() {

    const money = document.getElementById('content_money');

    const { data, error } = await supabase
        .from('money')
        .select('*');

        if (error) {
            money.innerText = "Помилка: " + error.message;
            return;
        }
        money.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}
displayMoney();

supabase
  .channel('any-name-here') 
  .on('postgres_changes', 
      { event: '*', schema: 'public', table: 'money' }, 
      (payload) => {
          displayMoney(); // Перемальовуємо дані
      }
  )
  .subscribe();