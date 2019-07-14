<?php
    class Login extends Controllers {
        public function __construct() {
            parent::__construct();
        }

        public function login() {
            if (isset($_SESSION['USER'])) header('Location:'.URL);
            else $this->view->render($this, 'login');
        }

        public function iniciarSesion() {
            if (isset($_POST['user']) && isset($_POST['pass'])) {
                $data = $this->model->iniciarSesion($_POST['user'], $_POST['pass']);
                if (is_array($data)) echo json_encode($data);
                else echo $data;
            }
        }

        public function cerrarSesion() {
            Session::closeSession();
            header('Location:'.URL.'Login/login');
        }
    }