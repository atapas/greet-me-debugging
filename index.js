
const print = function() {
    const name = document.getElementById('m_name').value;
    const wish = document.getElementById('m_wish').value;

    const message = 'Hello ' 
                        + name 
                        + ', Your wish `' 
                        + wish 
                        + '` may come true!';
    
    document.getElementById('output').innerHTML = '<span class="message">' + message + '</span>';
}