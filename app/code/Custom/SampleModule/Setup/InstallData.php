<?php namespace Custom\SampleModule\Setup;

use Magento\Eav\Setup\EavSetup;
use Magento\Eav\Setup\EavSetupFactory;
use Magento\Framework\Setup\InstallDataInterface;
use Magento\Framework\Setup\ModuleContextInterface;
use Magento\Framework\Setup\ModuleDataSetupInterface;

class InstallData implements InstallDataInterface
{
    private $eavSetupFactory;

    public function __construct(EavSetupFactory $eavSetupFactory)
    {
        $this->eavSetupFactory = $eavSetupFactory;
    }

    public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
    {
        $eavSetup = $this->eavSetupFactory->create(['setup' => $setup]);
        $eavSetup->addAttribute(\Magento\Catalog\Model\Product::ENTITY,
            'is_featured',
            ['type' => 'int', 'backend' => '', 'frontend' => '',
                'label' => 'Is Featured', 'input' => 'boolean',
                'class' => '', 'source' => '',
                'global' => \Magento\Eav\Model\Entity\Attribute\ScopedAttributeInterface::SCOPE_GLOBAL,
                'visible' => true, 'required' => true, 'user_defined' => false, 'default' => false,
                'searchable' => false, 'filterable' => false, 'comparable' => false,
                'visible_on_front' => true, 'used_in_product_listing' => true,
                'unique' => false, 'apply_to' => '']);
    }
}




















//
//namespace Custom\SampleModule\Setup;
//
//use Magento\Eav\Model\Config;
//use Magento\Eav\Setup\EavSetup;
//
//use Magento\Eav\Setup\EavSetupFactory;
//use Magento\Framework\Setup\InstallDataInterface;
//use Magento\Framework\Setup\ModuleContextInterface;
//use Magento\Framework\Setup\ModuleDataSetupInterface;
//use Magento\Eav\Model\Entity\Attribute\SetFactory as AttributeSetFactory;
//
//class InstallData implements InstallDataInterface
//{
//    /**
//     * @var Config
//     */
//    private $eavConfig;
//
//    /**
//     * @var EavSetupFactory
//     */
//    private $_eavSetupFactory;
//
//    /**
//     * @var AttributeSetFactory
//     */
//    private $attributeSetFactory;
//
//    /**
//     * @param Config $eavConfig
//     * @param EavSetupFactory $eavSetupFactory
//     * @param AttributeSetFactory $attributeSetFactory
//     */
//    public function __construct(
//        Config              $eavConfig,
//        EavSetupFactory     $eavSetupFactory,
//        AttributeSetFactory $attributeSetFactory
//    )
//    {
//        $this->eavConfig = $eavConfig;
//        $this->_eavSetupFactory = $eavSetupFactory;
//        $this->attributeSetFactory = $attributeSetFactory;
//    }
//
//    public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
//    {
//        $setup->startSetup();
//
//        $eavSetup = $this->_eavSetupFactory->create(['setup' => $setup]);
//
////        $eavSetup->addAttribute('customer_address', 'custom_address_attribute', [
////            'type' => 'varchar',
////            'input' => 'text',
////            'label' => 'Custom Address Attribute',
////            'visible' => true,
////            'required' => false,
////            'user_defined' => true,
////            'system' => false,
////            'group' => 'General',
////            'global' => true,
////            'visible_on_front' => true,
////        ]);
////
////        $customAttribute = $this->eavConfig->getAttribute('customer_address', 'custom_address_attribute');
////
////        $customAttribute->setData(
////            'used_in_forms',
////            ['adminhtml_customer_address', 'customer_address_edit', 'customer_register_address'],
////        );
////        $customAttribute->save();
//        $eavSetup->removeAttribute(\Magento\Catalog\Model\Product::ENTITY, 'featured_product');
//
//        $eavSetup->addAttribute(
//            \Magento\Catalog\Model\Product::ENTITY,
//            'featured_product',
//            [
//                'type' => 'int',
//                'backend' => '',
//                'frontend' => '',
//                'label' => 'Featured Product',
//                'input' => 'boolean',
//                'class' => '',
//                'source' => '',
//                'global' => \Magento\Eav\Model\Entity\Attribute\ScopedAttributeInterface::SCOPE_GLOBAL,
//                'visible' => true,
//                'required' => true,
//                'user_defined' => false,
//                'default' => false,
//                'searchable' => false,
//                'filterable' => false,
//                'comparable' => false,
//                'visible_on_front' => false,
//                'used_in_product_listing' => true,
//                'unique' => false,
//                'apply_to' => ''
//            ]
//        );
//
//        $setup->endSetup();
//    }
//}
//

//use Magento\Customer\Model\Customer;
//use Magento\Framework\Setup\ModuleContextInterface;
//use Magento\Framework\Setup\ModuleDataSetupInterface;
//
//class InstallData implements \Magento\Framework\Setup\InstallDataInterface
//{
//    private $eavSetupFactory;
//
//    private $eavConfig;
//
//    private $attributeResource;
//
//    public function __construct(
//        \Magento\Eav\Setup\EavSetupFactory $eavSetupFactory,
//        \Magento\Eav\Model\Config $eavConfig,
//        \Magento\Customer\Model\ResourceModel\Attribute $attributeResource
//    ) {
//        $this->eavSetupFactory = $eavSetupFactory;
//        $this->eavConfig = $eavConfig;
//        $this->attributeResource = $attributeResource;
//    }
//
//    public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
//    {
//        $eavSetup = $this->eavSetupFactory->create(['setup' => $setup]);
//
////        $eavSetup->removeAttribute(Customer::ENTITY, "skype");
////
////        $attributeSetId = $eavSetup->getDefaultAttributeSetId(Customer::ENTITY);
////        $attributeGroupId = $eavSetup->getDefaultAttributeGroupId(Customer::ENTITY);
////
////        $eavSetup->addAttribute(Customer::ENTITY, 'skype', [
////            // Attribute parameters
////            'type' => 'varchar',
////            'label' => 'Skype Account',
////            'input' => 'text',
////            'required' => false,
////            'visible' => true,
////            'user_defined' => true,
////            'sort_order' => 990,
////            'position' => 990,
////            'system' => 0,
////        ]);
////
////        $attribute = $this->eavConfig->getAttribute(Customer::ENTITY, 'skype');
////        $attribute->setData('attribute_set_id', $attributeSetId);
////        $attribute->setData('attribute_group_id', $attributeGroupId);
////
////
////        $attribute->setData('used_in_forms', [
////            'adminhtml_customer',
////            'customer_account_create',
////            'customer_account_edit'
////        ]);
////        $this->attributeResource->save($attribute);
//
//        $eavSetup->addAttribute('customer_address', 'skype_address', [
//            'type' => 'varchar',
//            'input' => 'text',
//            'label' => 'Skype',
//            'visible' => true,
//            'required' => false,
//            'user_defined' => true,
//            'comment' => 'Skype',
//            'system'=> false,
//            'group'=> 'General',
//            'global' => true,
//            'visible_on_front' => true,
//        ]);
//
//        $customAttribute = $this->eavConfig->getAttribute('customer_address', 'skype_address');
//
//        $customAttribute->setData(
//            'used_in_forms',
//            ['adminhtml_customer_address','customer_address_edit','customer_register_address'],
//        );
////        $customAttribute->save();
//
//        $this->attributeResource->save($customAttribute);
//    }
//}

