from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
def connect_db(app):
    db.app = app
    db.init_app(app)


"""Models for Blogly.""" 
    
class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String(30), nullable=False)
    last_name = db.Column(db.String(30), nullable=False)
    image_url = db.Column(db.Text, nullable=True, default=None)

    
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
    

    def greet(self):
        return f"Hello, you can have a friend called {self.first_name} {self.last_name}."
    

    @property
    def fullname(self):
        return f"{self.first_name} {self.last_name}"
    

    @fullname.setter
    def fullname(self, first_name, last_name):
        self._fullname = f"{first_name} {last_name}"

    @fullname.deleter
    def fullname(self):
        del self._fullname
    