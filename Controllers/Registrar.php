<?php
    class Registrar extends Controllers {
        public function __construct() {
            parent::__construct();
        }

        public function cliente() {
            if (isset($_SESSION['USER'])) header('Location:'.URL);
            else $this->view->render($this, 'cliente');
        }

        public function registrarCliente() {
            $data = $this->model->registrarCliente($_POST['cliName'], $_POST['cliLastname'], $_POST['cliTipoDoc'], $_POST['cliDoc'], $_POST['cliLocation'], $_POST['cliEmail'], $_POST['cliUser'], $_POST['cliPass']);
            if ($data == 1) echo 'El documento o el correo electrónico o el usuario ya se encuentran registrado';
            else echo $data;
        }

        public function empleado() {
            $this->view->render($this, 'empleado');
        }

        public function registrarEmpleado() {
            $data = $this->model->registrarEmpleado($_POST['empName'], $_POST['empLastname'], $_POST['empUser'], $_POST['empPass'], $_POST['empTipo']);
            if ($data == 1) echo 'El documento o el correo electrónico o el usuario ya se encuentran registrado';
            else echo $data;
        }
    }