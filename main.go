package main

import (
	"html/template"
	"log"
	"net/http"
	"strconv"
	"time"
)

var plantilla = template.Must(template.ParseGlob("views/html/*"))

func main() {
	http.Handle("/views/css/", http.StripPrefix("/views/css/", http.FileServer(http.Dir("views/css"))))
	http.Handle("/views/img/", http.StripPrefix("/views/img/", http.FileServer(http.Dir("views/img"))))
	http.Handle("/views/js/", http.StripPrefix("/views/js/", http.FileServer(http.Dir("views/js"))))

	http.HandleFunc("/", Inicio)
	http.HandleFunc("/ofers", OfersHandler)
	http.HandleFunc("/freee", freeplayHandler)
	http.HandleFunc("/mostwanted", MostwantedHandler)
	http.HandleFunc("/signin", SigninHandler)
	http.HandleFunc("/signup", SignupHandler)
	log.Println("Servidor corriendo.....")
	http.ListenAndServe(":8080", nil)
}

func Inicio(w http.ResponseWriter, r *http.Request) {
	setCacheHeaders(w)
	err := plantilla.ExecuteTemplate(w, "index.html", nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
func OfersHandler(w http.ResponseWriter, r *http.Request) {
	setCacheHeaders(w)
	err := plantilla.ExecuteTemplate(w, "offers.html", nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
func freeplayHandler(w http.ResponseWriter, r *http.Request) {
	setCacheHeaders(w)
	err := plantilla.ExecuteTemplate(w, "freeplay.html", nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
func MostwantedHandler(w http.ResponseWriter, r *http.Request) {
	setCacheHeaders(w)
	err := plantilla.ExecuteTemplate(w, "mostwanted.html", nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
func SigninHandler(w http.ResponseWriter, r *http.Request) {
	setCacheHeaders(w)
	err := plantilla.ExecuteTemplate(w, "signin.html", nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
func SignupHandler(w http.ResponseWriter, r *http.Request) {
	setCacheHeaders(w)
	err := plantilla.ExecuteTemplate(w, "signup.html", nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
func setCacheHeaders(w http.ResponseWriter) {
	// Configura cabeceras de caché para recursos estáticos
	// Establece el tiempo que deseas que los recursos se almacenen en caché
	cacheDuration := time.Hour * 24 * 7 // 1 semana
	w.Header().Set("Cache-Control", "public, max-age="+strconv.Itoa(int(cacheDuration.Seconds())))
}
