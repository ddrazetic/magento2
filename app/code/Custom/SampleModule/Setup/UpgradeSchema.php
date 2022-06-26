<?php
namespace Custom\SampleModule\Setup;
use Magento\Framework\DB\Ddl\Table;
//use Magento\Framework\Module\Setup\Migration;
use Magento\Framework\Setup\UpgradeSchemaInterface;
use Magento\Framework\Setup\ModuleContextInterface;
use Magento\Framework\Setup\SchemaSetupInterface;
class UpgradeSchema implements UpgradeSchemaInterface
{
    public function upgrade(SchemaSetupInterface $setup, ModuleContextInterface $context)
    {
       $setup->startSetup();
        if (version_compare($context->getVersion(), "1.0.4", "<")) {
            //Your upgrade script

//           $setup->getConnection()->dropColumn($setup->getTable('customer_entity'), 'myattribute');
//           $setup->getConnection()->dropColumn($setup->getTable('customer_entity'), 'my_attribute1');


//       $setup->getConnection()->addColumn(
//           $setup->getTable('customer_entity'),
//           "myattribute",  [
//           "type"     => Table::TYPE_TEXT,
//           "backend"  => "",
//           "label"    => "MyAttribute",
//           "comment"    => "MyAAttribute",
//           "input"    => "text",
//           "source"   => "",
//           "visible"  => true,
//           "required" => false,
//           "default" => "",
//           "frontend" => "",
//           "unique"     => false,
//           "note"       => ""
//       ]);
        }
       $setup->endSetup();
    }


}

