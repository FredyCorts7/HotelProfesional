<?php
    class Registrar extends Controllers {
        public function __construct() {
            parent::__construct();
        }

        public function cliente() {
            $this->view->render($this, 'cliente');
        }

        public function registrarCliente() {
            $data = $this->model->registrarClientes($_POST['cliName'], $_POST['cliLastname'], $_POST['cliTipoDoc'], $_POST['cliDoc'], $_POST['cliLocation'], $_POST['cliEmail'], $_POST['cliUser'], $_POST['cliPass']);
            if ($data == 1) echo 'Este email ya se encuentra registrado';
            else echo $data;
        }

        public function empleado() {
            $this->view->render($this, 'empleado');
        }

        public function registrarEmpleado() {
            
        }
    }