const SUPABASE_URL = "TU_URL_SUPABASE"
const SUPABASE_KEY = "TU_ANON_KEY"

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

async function obtenerAutos() {

const { data, error } = await supabase
.from("cars")
.select("*")

console.log(data)

}

obtenerAutos()
<body>
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script src="supabase.js"></script>

