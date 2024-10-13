// On doit creer la classe Product
class Product {
    // On fait la liste de toutes nos proprietees que l'on va retrouver dans l'objet final
    id;
    title;
    slug;
    description;
    grade;
    category;
    // La methode constructor est la methode appellee chaque fois que l'on instancie (que l'on cree) un nouvel objet
    constructor (id, title, slug, description, grade, category) {
    // Le this represente l'instance en cours
    // On veut generer un objet qui possede ces 3 proprietes, on va donc associe une valeur a chaque des proprietees
this.id = id;
this.title = title;
this.slug = slug;
this.description = description;
this.grade = grade;
this.category = category;
}
}

export default Product;