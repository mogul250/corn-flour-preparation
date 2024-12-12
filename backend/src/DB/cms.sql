-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2024 at 01:23 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cms`
--

-- --------------------------------------------------------

--
-- Table structure for table `debts`
--

CREATE TABLE `debts` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `client` varchar(255) NOT NULL,
  `weight` varchar(255) NOT NULL,
  `g_amount` float NOT NULL,
  `p_amount` float NOT NULL,
  `r_amount` float NOT NULL,
  `comment` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `debts`
--

INSERT INTO `debts` (`id`, `reporter`, `client`, `weight`, `g_amount`, `p_amount`, `r_amount`, `comment`, `date`) VALUES
('60586s', 'heshima', 'nyamanswa', '1000', 1000, 100, 900, 'yego', '2024-12-12 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` varchar(255) NOT NULL,
  `names` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `salary` int(11) NOT NULL,
  `saving` int(11) NOT NULL,
  `social` int(11) NOT NULL,
  `advance` int(11) NOT NULL,
  `r_salary` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `diesel` float NOT NULL,
  `lifters` float NOT NULL,
  `boys` float NOT NULL,
  `driver` float NOT NULL,
  `room` float NOT NULL,
  `food` float NOT NULL,
  `travel` float NOT NULL,
  `r_amount` float NOT NULL,
  `inc_amount` float NOT NULL,
  `g_amount` float NOT NULL,
  `comment` varchar(255) NOT NULL,
  `o_m` float NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`id`, `reporter`, `diesel`, `lifters`, `boys`, `driver`, `room`, `food`, `travel`, `r_amount`, `inc_amount`, `g_amount`, `comment`, `o_m`, `date`) VALUES
('07k386', 'heshima', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, '1000', 0, '0000-00-00 00:00:00'),
('39y599', 'heshima', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, '1000', 0, '0000-00-00 00:00:00'),
('70hjb4', 'heshima', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, '1000', 0, '0000-00-00 00:00:00'),
('97421x', 'heshima', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 'heshhs', 0, '2024-12-09 00:00:00'),
('k4b52o', 'heshima', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, '1000', 0, '0000-00-00 00:00:00'),
('m1c4z5', 'heshima', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 'heshhs', 10000, '2024-12-09 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `leftovers`
--

CREATE TABLE `leftovers` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `w_pre` float NOT NULL,
  `w_incoming` float NOT NULL,
  `w_tot` float NOT NULL,
  `comment` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leftovers`
--

INSERT INTO `leftovers` (`id`, `reporter`, `w_pre`, `w_incoming`, `w_tot`, `comment`, `date`) VALUES
('2gd43w', '876', 9876, 876, 10752, 'kjhg', '2024-12-08 00:00:00'),
('axrork', 'jhgfds', 987, 876, 1863, 'kjhg', '2024-12-07 00:00:00'),
('jv00t2', 'uytgf', 876, 765, 1641, '8765', '2024-12-08 00:00:00'),
('nh6h7k', 'SDRTYU', 7765, 8765, 16530, 'iuytr', '2024-12-06 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `leftover_out`
--

CREATE TABLE `leftover_out` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `client` varchar(255) NOT NULL,
  `weight` float NOT NULL,
  `price` float NOT NULL,
  `pm` varchar(255) NOT NULL,
  `g_amount` float NOT NULL,
  `r_amount` float NOT NULL,
  `p_name` varchar(255) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leftover_out`
--

INSERT INTO `leftover_out` (`id`, `reporter`, `client`, `weight`, `price`, `pm`, `g_amount`, `r_amount`, `p_name`, `comment`, `date`) VALUES
('8e8825', 'jhg', 'uyt', 765, 765, '', 585225, 0, '', 'kjh', '2024-12-08 00:00:00'),
('8upl3l', 'jhgfds', 'nb', 500, 500, 'momo', 250000, 6, '', 'hg', '2024-12-08 00:00:00'),
('ec813u', 'SDRTYU', 'kju', 600, 500, '', 300000, 500, '', 'uytr', '2024-12-07 00:00:00'),
('m9v84l', 'SDRTYU', 'SDFGHJ', 500, 500, 'mobile_money', 250000, 500, '', 'uytr', '2024-12-06 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `mr`
--

CREATE TABLE `mr` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `commande` varchar(255) NOT NULL,
  `returned` varchar(255) NOT NULL,
  `expenses` varchar(255) NOT NULL,
  `debts` varchar(255) NOT NULL,
  `p_debts` varchar(255) NOT NULL,
  `cash` float NOT NULL,
  `phone` float NOT NULL,
  `bank` float NOT NULL,
  `comment` varchar(100) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mr`
--

INSERT INTO `mr` (`id`, `reporter`, `commande`, `returned`, `expenses`, `debts`, `p_debts`, `cash`, `phone`, `bank`, `comment`, `date`) VALUES
('0h27qf', 'heshima', '1000', '1000', '1000', '1000', '1000', 1000, 1000, 1000, 'yego', '2024-12-12 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `packaging`
--

CREATE TABLE `packaging` (
  `id` varchar(255) NOT NULL,
  `incoming_c` float NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `waste_e` float NOT NULL,
  `f_e` varchar(255) NOT NULL,
  `if_t` float NOT NULL,
  `is_t` float NOT NULL,
  `ma_t` float NOT NULL,
  `nf_t` float NOT NULL,
  `sack_no_IF` int(11) NOT NULL,
  `sack_no_IS` int(11) NOT NULL,
  `sack_no_MA` int(11) NOT NULL,
  `sack_no_NF` int(11) NOT NULL,
  `new_food` varchar(500) NOT NULL,
  `ifunguro` varchar(500) NOT NULL,
  `isezerano` varchar(500) NOT NULL,
  `magaju` varchar(500) NOT NULL,
  `envelopes` float NOT NULL,
  `waste_f` float NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `packaging`
--

INSERT INTO `packaging` (`id`, `incoming_c`, `reporter`, `waste_e`, `f_e`, `if_t`, `is_t`, `ma_t`, `nf_t`, `sack_no_IF`, `sack_no_IS`, `sack_no_MA`, `sack_no_NF`, `new_food`, `ifunguro`, `isezerano`, `magaju`, `envelopes`, `waste_f`, `comment`, `date`) VALUES
('20643m', 100, 'heshima', 0, '{\"IF\":3434,\"IS\":77887,\"MA\":787,\"NF\":10000}', 2200, 300, 300, 1200, 100, 50, 0, 200, '{\"5\":20,\"10\":100,\"25\":4}', '{\"5\":220,\"10\":100,\"25\":4}', '{\"5\":20,\"10\":10,\"25\":4}', '{\"5\":20,\"10\":10,\"25\":4}', 50, 100, '1000', '2024-12-12 00:00:00'),
('fh34l9', 10000, 'HESHIMA', 0, '{\"IF\":2500,\"IS\":2500,\"MA\":2500,\"NF\":2500}', 3000, 2500, 2500, 2500, 2, 1, 10, 10, '{\"5\":100,\"10\":100,\"25\":40}', '{\"5\":200,\"10\":100,\"25\":40}', '{\"5\":100,\"10\":100,\"25\":40}', '{\"5\":100,\"10\":100,\"25\":40}', 500, 500, 'WEFGH', '2024-12-08 00:00:00'),
('j5qo1p', 10000, 'HIRWA', 0, '{\"IF\":2500,\"IS\":2500,\"MA\":2500,\"NF\":2500}', 3000, 2500, 2500, 2500, 1, 7, 100, 29, '{\"5\":100,\"10\":100,\"25\":40}', '{\"5\":200,\"10\":100,\"25\":40}', '{\"5\":100,\"10\":100,\"25\":40}', '{\"5\":100,\"10\":100,\"25\":40}', 500, 500, 'WEFGH', '2024-12-08 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `packaging_track`
--

CREATE TABLE `packaging_track` (
  `id` varchar(255) NOT NULL,
  `weights` varchar(700) NOT NULL,
  `r_weights` varchar(1000) NOT NULL,
  `act_type` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `if_t` float NOT NULL,
  `is_t` float NOT NULL,
  `ma_t` float NOT NULL,
  `nf_t` float NOT NULL,
  `env_t` float NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `packaging_track`
--

INSERT INTO `packaging_track` (`id`, `weights`, `r_weights`, `act_type`, `destination`, `if_t`, `is_t`, `ma_t`, `nf_t`, `env_t`, `date`) VALUES
('059uof', '{\"NF\":0,\"IS\":0,\"MA\":0,\"IF\":0,\"envelope\":500}', '{\"NF\":{\"5\":200,\"10\":200,\"25\":80},\"IS\":{\"5\":200,\"10\":200,\"25\":80},\"IF\":{\"5\":400,\"10\":200,\"25\":80},\"MA\":{\"5\":200,\"10\":200,\"25\":80},\"envelope\":{\"2\":750}}', 'minus', 'sales', 6000, 5000, 5000, 5000, 1500, '2024-12-09 00:34:18'),
('20643m', '{\"NF\":1200,\"IS\":300,\"MA\":300,\"IF\":2200,\"envelope\":100}', '{\"NF\":{\"5\":220,\"10\":300,\"25\":84},\"IS\":{\"5\":220,\"10\":210,\"25\":84},\"IF\":{\"5\":620,\"10\":300,\"25\":84},\"MA\":{\"5\":220,\"10\":210,\"25\":84},\"envelope\":{\"2\":800}}', 'add', 'packaging', 8200, 5300, 5300, 6200, 1600, '2024-12-12 01:03:27'),
('fh34l9', '{\"NF\":2500,\"IS\":2500,\"MA\":2500,\"IF\":3000,\"envelope\":1000}', '{\"NF\":{\"5\":200,\"10\":200,\"25\":80},\"IS\":{\"5\":200,\"10\":200,\"25\":80},\"IF\":{\"5\":400,\"10\":200,\"25\":80},\"MA\":{\"5\":200,\"10\":200,\"25\":80},\"envelope\":{\"2\":1000}}', 'add', 'packaging', 6000, 5000, 5000, 5000, 2000, '2024-12-09 00:05:20'),
('j5qo1p', '{\"NF\":2500,\"IS\":2500,\"MA\":2500,\"IF\":3000,\"envelope\":1000}', '{\"NF\":{\"5\":100,\"10\":100,\"25\":40},\"IS\":{\"5\":100,\"10\":100,\"25\":40},\"IF\":{\"5\":200,\"10\":100,\"25\":40},\"MA\":{\"5\":100,\"10\":100,\"25\":40},\"envelope\":{\"2\":500}}', 'add', 'packaging', 3000, 2500, 2500, 2500, 1000, '2024-12-09 00:03:48');

-- --------------------------------------------------------

--
-- Table structure for table `preparation`
--

CREATE TABLE `preparation` (
  `id` varchar(255) NOT NULL,
  `incoming_c` float NOT NULL,
  `prepared_c` float NOT NULL,
  `waste_f` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `preparation`
--

INSERT INTO `preparation` (`id`, `incoming_c`, `prepared_c`, `waste_f`, `reporter`, `comment`, `date`) VALUES
('1625wp', 2000, 6800, '200', 'heshima', 'wert', '2024-12-11 23:38:14'),
('91d641', 1000, 1800, '200', 'heshima', 'byaciyemo', '2024-12-11 23:51:17'),
('9zw0yn', 3000, 1800, '200', 'heshima', 'qpzm', '2024-12-12 00:18:09'),
('kd67za', 7000, 6800, '200', 'heshima', 'byakunze', '2024-12-11 23:09:25'),
('qfbuhu', 3000, 1800, '200', 'heshima', 'yego', '2024-12-11 23:55:46'),
('su01df', 3000, 1800, '200', 'heshima', 'done', '2024-12-12 00:01:17'),
('tb50nd', 2000, 6800, '200', 'heshima', 'byaciyemo', '2024-12-11 23:45:15');

-- --------------------------------------------------------

--
-- Table structure for table `preparation_track`
--

CREATE TABLE `preparation_track` (
  `id` varchar(255) NOT NULL,
  `act_type` varchar(255) NOT NULL,
  `weight` float NOT NULL,
  `destination` varchar(255) NOT NULL,
  `r_weight` float NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `preparation_track`
--

INSERT INTO `preparation_track` (`id`, `act_type`, `weight`, `destination`, `r_weight`, `date`) VALUES
('1625wp', 'add', 6800, 'preparation', 13600, '2024-12-11 23:38:14'),
('20643m', 'minus', -100, 'packaging', 27500, '2024-12-12 01:03:27'),
('91d641', 'add', 1800, 'preparation', 22200, '2024-12-11 23:51:17'),
('9zw0yn', 'add', 1800, 'preparation', 27600, '2024-12-12 00:18:09'),
('kd67za', 'add', 6800, 'preparation', 6800, '2024-12-11 23:09:25'),
('qfbuhu', 'add', 1800, 'preparation', 24000, '2024-12-11 23:55:46'),
('su01df', 'add', 1800, 'preparation', 25800, '2024-12-12 00:01:17'),
('tb50nd', 'add', 6800, 'preparation', 20400, '2024-12-11 23:45:15');

-- --------------------------------------------------------

--
-- Table structure for table `p_debts`
--

CREATE TABLE `p_debts` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `client` varchar(255) NOT NULL,
  `debt` float NOT NULL,
  `p_debt` float NOT NULL,
  `pm` varchar(255) NOT NULL,
  `p_name` varchar(255) NOT NULL,
  `r_debt` float NOT NULL,
  `comment` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `p_debts`
--

INSERT INTO `p_debts` (`id`, `reporter`, `client`, `debt`, `p_debt`, `pm`, `p_name`, `r_debt`, `comment`, `date`) VALUES
('o9sa0u', 'igikeri', '60586s', 1000, 100, 'Cash', 'daaata', 900, 'byari sawa', '2024-12-12 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `returns`
--

CREATE TABLE `returns` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `ifunguro` varchar(1000) NOT NULL,
  `isezerano` varchar(1000) NOT NULL,
  `magaju` varchar(1000) NOT NULL,
  `new_food` varchar(1000) NOT NULL,
  `envelope` varchar(1000) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `returns`
--

INSERT INTO `returns` (`id`, `reporter`, `ifunguro`, `isezerano`, `magaju`, `new_food`, `envelope`, `comment`, `date`) VALUES
('82u60c', 'SDRTYU', '{\"5\":200,\"10\":100,\"25\":40}', '{\"5\":200,\"10\":100,\"25\":40}', '{\"5\":200,\"10\":100,\"25\":40}', '{\"5\":200,\"10\":100,\"25\":40}', '{\"2\":500}', 'JMHGF', '2024-12-08 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `distributor` varchar(255) NOT NULL,
  `g_amount` float NOT NULL,
  `sack_no_NF` int(11) NOT NULL,
  `sack_no_IF` int(11) NOT NULL,
  `sack_no_IS` int(11) NOT NULL,
  `sack_no_MA` int(11) NOT NULL,
  `ifunguro` varchar(700) NOT NULL,
  `isezerano` varchar(700) NOT NULL,
  `magaju` varchar(700) NOT NULL,
  `new_food` varchar(700) NOT NULL,
  `envelope` varchar(700) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `reporter`, `distributor`, `g_amount`, `sack_no_NF`, `sack_no_IF`, `sack_no_IS`, `sack_no_MA`, `ifunguro`, `isezerano`, `magaju`, `new_food`, `envelope`, `comment`, `date`) VALUES
('m1f1j7', 'heshima', 'kapooo', 1000, 200, 50, 100, 0, '{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":null,\"10\":null,\"25\":null},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":null,\"10\":null,\"25\":null},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":null,\"10\":null,\"25\":null},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"weights\":{\"5\":20,\"10\":10,\"25\":8},\"pricings\":{\"5\":98,\"10\":1000,\"25\":100},\"totals\":{\"5\":1960,\"10\":10000,\"25\":800}}', '{\"weights\":{\"2\":50},\"pricings\":{\"2\":70},\"totals\":{\"2\":3500}}', 'byaciyemo', '2024-12-12 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sales_n_returns`
--

CREATE TABLE `sales_n_returns` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(1000) NOT NULL,
  `distributor` varchar(255) NOT NULL,
  `loc` varchar(255) NOT NULL,
  `pm` varchar(255) NOT NULL,
  `p_sold` varchar(1000) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales_n_returns`
--

INSERT INTO `sales_n_returns` (`id`, `reporter`, `distributor`, `loc`, `pm`, `p_sold`, `comment`, `date`) VALUES
('059uof', 'SDRTYU', 'SDFGHJ', 'iuyt', 'mobile_money', '{\"NF\":{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":0,\"10\":0,\"25\":0},\"totals\":{\"5\":0,\"10\":0,\"25\":0}},\"IS\":{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":0,\"10\":0,\"25\":0},\"totals\":{\"5\":0,\"10\":0,\"25\":0}},\"IF\":{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":0,\"10\":0,\"25\":0},\"totals\":{\"5\":0,\"10\":0,\"25\":0}},\"MA\":{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":0,\"10\":0,\"25\":0},\"totals\":{\"5\":0,\"10\":0,\"25\":0}},\"envelope\":{\"weights\":{\"2\":250},\"pricings\":{\"2\":500},\"totals\":{\"2\":125000}}}', 'LKJ', '2024-12-08 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sales_track`
--

CREATE TABLE `sales_track` (
  `id` varchar(255) NOT NULL,
  `weights` varchar(255) NOT NULL,
  `act_type` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `totals` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales_track`
--

INSERT INTO `sales_track` (`id`, `weights`, `act_type`, `destination`, `totals`, `date`) VALUES
('059uof', '{\"NF\":0,\"IS\":0,\"MA\":0,\"IF\":0,\"envelope\":500}', 'add', 'sales', '{\"nf\":6500,\"is\":7000,\"ma\":6500,\"if\":6800,\"envelope\":1700}', '2024-12-09 00:34:17'),
('26k658', '{\"NF\":1500,\"IS\":1500,\"MA\":1000,\"IF\":1300,\"envelope\":200}', 'add', 'sales', '{\"nf\":1500,\"is\":1500,\"ma\":1000,\"if\":1300,\"envelope\":200}', '2024-12-08 22:32:23'),
('2v7x02', '{\"NF\":2500,\"IS\":2500,\"MA\":2500,\"IF\":2500,\"envelope\":500}', 'add', 'sales', '{\"nf\":6500,\"is\":7000,\"ma\":6500,\"if\":6800,\"envelope\":1200}', '2024-12-09 00:22:00'),
('w2l73k', '{\"NF\":2500,\"IS\":3000,\"MA\":3000,\"IF\":3000,\"envelope\":500}', 'add', 'sales', '{\"nf\":4000,\"is\":4500,\"ma\":4000,\"if\":4300,\"envelope\":700}', '2024-12-09 00:10:44');

-- --------------------------------------------------------

--
-- Table structure for table `stock1`
--

CREATE TABLE `stock1` (
  `id` varchar(255) NOT NULL,
  `dist_names` varchar(255) NOT NULL,
  `dist_plate_no` varchar(255) NOT NULL,
  `weight` float NOT NULL,
  `dryness` varchar(255) NOT NULL,
  `moldness` varchar(255) NOT NULL,
  `net_price` float NOT NULL,
  `gross_price` float NOT NULL,
  `amount_paid` float NOT NULL,
  `r_amount` float NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stock1`
--

INSERT INTO `stock1` (`id`, `dist_names`, `dist_plate_no`, `weight`, `dryness`, `moldness`, `net_price`, `gross_price`, `amount_paid`, `r_amount`, `reporter`, `comment`, `date`) VALUES
('5irol3', 'nyamanswa', 'rah008d', 3000, '199', '192', 100000, 120000, 1200000, 3000, 'heshima', 'byakunze', '2024-12-11 23:52:36'),
('7co41d', 'nyamanswa', 'rah008d', 1000, '199', '192', 100000, 120000, 1200000, 1000, 'heshima', 'byaciyemo', '2024-12-11 23:43:58'),
('d39739', 'heshima', 'rah108d', 9000, '3000', '192', 20000, 8000, 7000, 1000, 'nyamanswa', 'byarejo', '2024-12-11 22:57:32'),
('k98548', 'nyamanswa', 'rah008d', 1000, '199', '192', 100000, 120000, 1200000, 1000, 'heshima', 'ffffdfdf', '2024-12-10 22:42:59'),
('m6co1a', 'nyamanswa', 'rah008d', 3000, '199', '192', 100000, 120000, 1200000, 3000, 'df', 'done', '2024-12-11 23:57:02'),
('u00x0v', 'nyamanswa', 'rah008d', 1000, '199', '192', 100000, 120000, 1200000, 3000, 'heshima', 'byakunze', '2024-12-11 23:50:28');

-- --------------------------------------------------------

--
-- Table structure for table `stock1_track`
--

CREATE TABLE `stock1_track` (
  `id` varchar(255) NOT NULL,
  `act_type` varchar(255) NOT NULL,
  `weight` float NOT NULL,
  `destination` varchar(255) NOT NULL,
  `r_weight` float NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stock1_track`
--

INSERT INTO `stock1_track` (`id`, `act_type`, `weight`, `destination`, `r_weight`, `date`) VALUES
('1625wp', 'minus', -2000, 'preparation', 1000, '2024-12-11 23:38:14'),
('5irol3', 'add', 3000, 'stock1', 3000, '2024-12-11 23:52:36'),
('7co41d', 'add', 1000, 'stock1', 2000, '2024-12-11 23:43:58'),
('91d641', 'minus', -1000, 'preparation', 0, '2024-12-11 23:51:17'),
('9zw0yn', 'minus', -3000, 'preparation', 0, '2024-12-12 00:18:09'),
('d39739', 'add', 9000, 'stock1', 10000, '2024-12-11 22:57:32'),
('k98548', 'add', 1000, 'stock1', 1000, '2024-12-10 22:42:59'),
('kd67za', 'minus', -7000, 'preparation', 3000, '2024-12-11 23:09:25'),
('m6co1a', 'add', 3000, 'stock1', 3000, '2024-12-11 23:57:02'),
('qfbuhu', 'minus', -3000, 'preparation', 0, '2024-12-11 23:55:46'),
('tb50nd', 'minus', -2000, 'preparation', 0, '2024-12-11 23:45:15'),
('u00x0v', 'add', 1000, 'stock1', 1000, '2024-12-11 23:50:28');

-- --------------------------------------------------------

--
-- Table structure for table `stock_track`
--

CREATE TABLE `stock_track` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `sack_no` varchar(255) NOT NULL,
  `ifunguro` varchar(1000) NOT NULL,
  `isezerano` varchar(1000) NOT NULL,
  `magaju` varchar(1000) NOT NULL,
  `new_food` varchar(1000) NOT NULL,
  `envelope` varchar(1000) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `names` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `2FA` varchar(255) DEFAULT NULL,
  `dateadded` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `names`, `email`, `role`, `password`, `2FA`, `dateadded`) VALUES
('1', 'WORKER', 'hirwajeermie@gmail.com', 'WORKER', '$2b$10$URq4tLusp2/i60KOa8Xk6ei7.6idy8Trg3F/1zadSe4RcFr17xzqq', NULL, '2024-11-06 16:43:38'),
('E15JV9y', 'TYCOON', 'hesh.teo@gmail.com', 'BOSS', '$2b$10$XAS88zWGLdyk9RUfIzaXUurBp70vaD4QADy1c8g6o.isR8nk.kpzG', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiRTE1SlY5eSIsInJvbGUiOiJCT1NTIiwiaWF0IjoxNzMzNzYxOTAzLCJleHAiOjE3MzM3NjI1MDN9.ILK0tQOZtufPvhsXTGbZM3MQsiipFWQlNP9yRH67XuQ', '2024-11-06 19:34:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `debts`
--
ALTER TABLE `debts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leftovers`
--
ALTER TABLE `leftovers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leftover_out`
--
ALTER TABLE `leftover_out`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mr`
--
ALTER TABLE `mr`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packaging`
--
ALTER TABLE `packaging`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packaging_track`
--
ALTER TABLE `packaging_track`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `preparation`
--
ALTER TABLE `preparation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `preparation_track`
--
ALTER TABLE `preparation_track`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `p_debts`
--
ALTER TABLE `p_debts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `returns`
--
ALTER TABLE `returns`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales_n_returns`
--
ALTER TABLE `sales_n_returns`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales_track`
--
ALTER TABLE `sales_track`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stock1`
--
ALTER TABLE `stock1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stock1_track`
--
ALTER TABLE `stock1_track`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stock_track`
--
ALTER TABLE `stock_track`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
