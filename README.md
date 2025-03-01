# RedexJS
Simplifique a tarefa de escrever expressões regulares

![logo redexJs](logo3_1_71510.png)

## 1️⃣ Estrutura Básica  
Métodos fundamentais para criar regex.  

| Método      | Descrição                 | Equivalente em Regex |
|------------|-------------------------|------------------|
| `.start()` | Define o início da string | `^` |
| `.end()`   | Define o final da string  | `$` |
| `.build()` | Constrói e retorna a regex | `new RegExp()` |

---

## 2️⃣ Correspondência de Caracteres  
Para capturar diferentes tipos de caracteres.  

| Método        | Descrição | Equivalente em Regex |
|--------------|---------------------|------------------|
| `.word()`    | Uma ou mais letras ou números | `\w+` |
| `.digit()`   | Um único dígito | `\d` |
| `.digits(n)` | Exatamente `n` dígitos | `\d{n}` |
| `.number()`  | Um número inteiro ou decimal | `\d+(\.\d+)?` |
| `.letter()`  | Uma única letra | `[a-zA-Z]` |
| `.uppercase()` | Uma letra maiúscula | `[A-Z]` |
| `.lowercase()` | Uma letra minúscula | `[a-z]` |
| `.space()`   | Um espaço | `\s` |
| `.any()`     | Qualquer caractere | `.` |
| `.text()`    | Uma palavra completa | `[a-zA-Z0-9]+` |

---

## 3️⃣ Quantificadores  
Definem repetições.  

| Método           | Descrição | Equivalente em Regex |
|-----------------|---------------------|------------------|
| `.zeroOrMore()` | Zero ou mais ocorrências | `*` |
| `.oneOrMore()`  | Uma ou mais ocorrências | `+` |
| `.optional()`   | Torna o caractere opcional | `?` |
| `.repeat(n)`    | Repete exatamente `n` vezes | `{n}` |
| `.range(min, max)` | Entre `min` e `max` repetições | `{min,max}` |

---

## 4️⃣ Grupos e Alternância  
Agrupamento e opções alternativas.  

| Método        | Descrição | Equivalente em Regex |
|--------------|---------------------|------------------|
| `.group()`   | Agrupa elementos | `(...)` |
| `.or(a, b)`  | Define alternativas | `a|b` |
| `.capture()` | Captura um grupo de caracteres | `(...)` |
| `.namedGroup(name)` | Nomeia um grupo capturado | `(?<name>...)` |

---

## 5️⃣ Métodos Especiais  
Adicionam mais flexibilidade.  

| Método        | Descrição | Equivalente em Regex |
|--------------|---------------------|------------------|
| `.exact("txt")` | Correspondência exata | `txt` |
| `.not("txt")`   | Exclui um termo | `(?!txt)` |
~~| `.between(a, b)` | Qualquer caractere entre `a` e `b` | `[a-b]` |~~
| `.startsWith("txt")` | Inicia com um texto específico | `^txt` |
| `.endsWith("txt")` | Termina com um texto específico | `txt$` |

---

## 6️⃣ Aplicações Específicas  
Facilita a criação de regex para casos comuns.  

| Método        | Descrição | Equivalente em Regex |
|--------------|---------------------|------------------|
| `.email()`   | Valida um e-mail | `[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$` |
| `.phone()`   | Valida um telefone | `?\d{2}?\s\d{4,5}-\d{4}` |
| `.url()`     | Valida uma URL | `https?:\/\/[^\s]+` |
| `.ip()`      | Valida um endereço IP | `\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}` |

---

## 🎯 Exemplo de Uso  
Com esses métodos, criar uma regex para validar um **e-mail** ficaria assim:  

```js
const emailRegex = new RegexScript()
    .start()
    .text()
    .exact("@")
    .text()
    .exact(".")
    .word()
    .end()
    .build();
